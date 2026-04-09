# Länder

Interaktive Länder-Übersicht mit Lernkarten-Funktion.

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | HTML-Struktur, Anti-FOUC-Snippet für Dark Mode |
| `style.css` | Alle Styles: Themes, Layout, Karten, Flashcard-Overlay |
| `app.js` | Daten, Rendering, Filter/Suche, Flashcard-Logik |
| `laender.json` | Länderdaten (Land, Hauptstadt, Kontinent, Fläche, Bevölkerung, Fakt) |

## Starten

Lokaler Server nötig (wegen `fetch()` für laender.json):

```bash
npx serve .
```

Dann im Browser: `http://localhost:3000`

## Wo was ändern

**Farben, Dark Mode, Layout** → `style.css`  
CSS-Variablen stehen ganz oben in `:root { }` und `:root.is-dark { }`

**Länderdaten** → `laender.json`  
Jeder Eintrag kann diese Felder haben:
- `Land`, `Hauptstadt`, `Kontinent`, `Fläche`, `Bevölkerung` – Pflichtfelder
- `Fakt` – optionaler „Wusstest du?"-Block
- `UNStatus` – optional: `nicht_anerkannt` / `beobachter` / `teilweise_anerkannt`
- `UNStatusText` – Erklärungstext zum UN-Status

**Logik, Flashcards, Rendering** → `app.js`  
- `FLAGS` – Emoji-Flags pro Ländername
- `renderList()` – Hauptliste neu aufbauen
- `buildCard()` – einzelne Länderkarte
- `renderStart/Card/Reveal/Type/Result()` – Flashcard-Zustände

## Features

- Filterung nach Kontinent
- Suche nach Land oder Hauptstadt
- Alle Karten auf-/zuklappen
- Dark Mode (System + manuell, persistent)
- Lernkarten: Aufdecken- oder Eingabe-Modus, filterbar nach Anfangsbuchstaben
