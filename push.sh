#!/bin/bash
cd ~/Documents/bobil-scraper/web
git add .
git commit -m "Oppdatering $(date '+%d.%m.%Y %H:%M')"
git push
echo ""
echo "✅ Bobilsiden er oppdatert!"
echo "🌐 https://arcellius.github.io/bobil-preview-x7k9/"
echo ""
read -p "Trykk Enter for å lukke..."
