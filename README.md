# Sudoku Solver und Generator

Dieses Projekt ist eine webbasierte Sudoku-Anwendung, die es Benutzern ermöglicht, neue Sudoku-Rätsel mit verschiedenen Schwierigkeitsgraden zu generieren, diese zu lösen und ihre Lösungen zu überprüfen. Die Anwendung ist mit JavaScript und dem Express.js-Framework für den Serverteil erstellt worden, und für das Frontend wurden HTML und CSS verwendet.

## Funktionen

- **Sudoku-Generierung**: Benutzer können neue Sudoku-Rätsel mit einstellbaren Schwierigkeitsgraden (super einfach, einfach, mittel, schwer) generieren.
- **Sudoku-Lösung**: Die Anwendung bietet einen Solver, der die Lösung für generierte Rätsel findet.
- **Validierung von Benutzereingaben**: Benutzer können ihre Vermutungen in das Rätsel eingeben, und die Anwendung überprüft die Richtigkeit der eingegebenen Werte.
- **Dynamische Schwierigkeitsauswahl**: Benutzer können vor dem Generieren eines neuen Sudoku-Rätsels den Schwierigkeitsgrad auswählen.

## Projektstruktur

- **public**-Verzeichnis: Enthält statische Assets wie HTML-, CSS- und JavaScript-Dateien.
  - `index.html`: Die Haupt-HTML-Datei für die Anwendung.
  - `styles.css`: Stylesheet für das Styling der Benutzeroberfläche.
  - `scripts.js`: JavaScript-Datei für die Bearbeitung von Benutzerinteraktionen und die Generierung von Rätseln.
  - `solver.js`: JavaScript-Datei mit der Logik für den Sudoku-Löser.
  - `generateSudoku.js`: JavaScript-Datei mit der Logik für die Generierung von Sudoku-Rätseln.
  - `isValid.js`: JavaScript-Datei mit Funktionen zur Validierung von Benutzereingaben.
- `server.js`: Die serverseitige JavaScript-Datei, die Express.js verwendet, um statische Dateien zu servieren und API-Endpunkte zu behandeln.
- `README.md`: Diese Datei, die einen Überblick über das Projekt bietet.

## Erste Schritte

1. **Klone das Repository**: `git clone https://github.com/LeonLicher/Sudoku.git`
2. **Navigiere zum Projektverzeichnis**: `cd Sudoku`
3. **Installiere Abhängigkeiten**: `npm install`
4. **Starte die Anwendung**: `npm start`
5. **Öffne deinen Browser**: Gehe zu `http://localhost:8080`, um auf die Sudoku-Anwendung zuzugreifen.

## Verwendung

1. Wähle einen Schwierigkeitsgrad aus dem Dropdown-Menü.
2. Klicke auf den Button "Neues Sudoku generieren", um ein neues Rätsel zu erstellen.
3. Löse das Rätsel, indem du die Zellen mit deinen Vermutungen ausfüllst.
4. Klicke auf den Button "Auswerten", um die Richtigkeit deiner Lösung zu überprüfen.
5. Optional: Klicke auf den Button "Lösung generieren", um die vollständige Lösung anzuzeigen.

## Mitarbeit

Beiträge sind willkommen! Wenn du Ideen für Verbesserungen oder Fehlerbehebungen hast, reiche bitte ein Issue oder einen Pull-Request ein.

## Lizenz

Dieses Projekt ist unter der [MIT-Lizenz](LICENSE) lizenziert.

---

Fühle dich frei, dieses README an dein Projekt anzupassen oder zusätzliche Informationen hinzuzufügen.
