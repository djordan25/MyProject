#!/usr/bin/env bash
# Downloads the source texts used to build src/content/data/passages.json into .sources/
# (npm pack only downloads the tarball; no package code is installed or run).
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p .sources
fetch() { # fetch <npm package> <directory name>
  local dir=".sources/$2"
  if [ -d "$dir/package" ]; then echo "have $2"; return; fi
  mkdir -p "$dir"
  (cd "$dir" && npm pack "$1" --silent >/dev/null && tar xzf ./*.tgz && rm ./*.tgz)
  echo "fetched $2"
}
fetch quran-json quran-json
fetch hadith hadith
fetch @bible-help/get-bible-verses bsb
