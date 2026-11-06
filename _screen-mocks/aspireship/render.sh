#!/usr/bin/env sh
# Render a screen mock to a 2x PNG at the original screenshot's CSS size.
# Usage: sh _screen-mocks/aspireship/render.sh <mock-name> <output-name> [width] [height]
#   e.g. sh _screen-mocks/aspireship/render.sh course-01 Course-01-polished 1363 908
# Width and height should match the original screenshot (default 1363x908).
# Needs network on first run (Tailwind Play CDN and Google Fonts Poppins).
set -e
here="$(cd "$(dirname "$0")" && pwd)"
repo="$(cd "$here/../.." && pwd)"
name="$1"; out="$2"; w="${3:-1363}"; h="${4:-908}"
chrome="${CHROME:-/c/Program Files/Google/Chrome/Application/chrome.exe}"
win_html="$(cygpath -m "$here/$name.html" 2>/dev/null || echo "$here/$name.html")"
win_out="$(cygpath -m "$repo/assets/img/aspireship-screens/$out.png" 2>/dev/null || echo "$repo/assets/img/aspireship-screens/$out.png")"
"$chrome" --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size="$w,$h" \
  --virtual-time-budget=8000 \
  --screenshot="$win_out" "file:///$(echo "$win_html" | sed 's/ /%20/g')"
