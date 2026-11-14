#!/usr/bin/env bash
# Downloads the source texts used to build src/content/data/passages.json into .sources/
# (npm pack only downloads the tarball; no package code is installed or run).
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p .sources
for pkg in quran-json hadith world-english-bible; do
  dir=".sources/$pkg"
  if [ -d "$dir/package" ]; then echo "have $pkg"; continue; fi
  mkdir -p "$dir"
  (cd "$dir" && npm pack "$pkg" --silent >/dev/null && tar xzf ./*.tgz && rm ./*.tgz)
  echo "fetched $pkg"
done
