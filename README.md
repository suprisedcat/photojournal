# Project 01 — Photo Journal

> **🛠️ Stack for this lesson** — Expo SDK 54 / React Native 0.79 · runs in Expo Go on a real phone.
> 📥 Template: [/learn/m1/template/project-01-photo-journal](/learn/m1/template/project-01-photo-journal)

A 3-screen journal: list view, detail view, and an add-entry form. The screens, the conditional-rendering navigation, the `EntryCard`, the `ActionButton`, and the form inputs are wired up. You'll write the two state functions that turn the form into a real "add" and the delete affordance into a real "remove".

**Time:** ~2 hours · **Combines:** Activities 01–03

---

## What You'll Build

| # | TODO | File |
|---|------|------|
| 1 | `addEntry` — validate that title and caption aren't empty, push a new entry with a unique id and today's date, then clear the form and return to the list | `App.js` |
| 2 | `deleteEntry` — remove an entry by id immutably | `App.js` |

The list, detail view, and form already render correctly with the seed entry. Mirror Activity 03's add/delete pattern.

## Run It

```bash
npm install --legacy-peer-deps
npx expo start
```

Scan the QR code with **Expo Go** on a phone that's on the same Wi-Fi as your computer, or press `w` to preview in a browser.

## Verify

Your project is done when, on a real device:

- [ ] Tapping "+ New Entry" opens the form; tapping Cancel returns to the list.
- [ ] Submitting the form with both title and caption filled adds a row to the list with today's date.
- [ ] Submitting with either field empty does *not* add an entry.
- [ ] After saving, the form is cleared and the list view is shown again.
- [ ] Tapping an entry opens the detail view; tapping ← Back returns.
- [ ] Deleting an entry removes that one row and leaves the others.

## Stretch

Pick one and document the choice in your reflection:
- Sort the list newest-first by computing dates from `Date.now()` instead of `toLocaleDateString()`.
- Add a character-count indicator under the caption input (e.g. "120/280").
- Add an "Edit" affordance on the detail screen that pre-fills the form with that entry's values and replaces it on save.

## 🪞 Reflect on Your Work

Answer in 2-3 sentences each, in this README under your TODO commits. Your tutor reads these as part of grading.

1. **What did you learn that you didn't know before?** Name the most surprising thing — a bug you hit, a syntax quirk, a way the simulator and real device differ.
2. **How did you collaborate with AI?** If you used Claude / ChatGPT / Cursor / Copilot, what part of the work did *you* contribute — the prompt, the verification, the design decision, the bug-fix? If you didn't use AI, what was the hardest thing to figure out alone?
3. **How do you know your code works?** Describe one specific thing you did to confirm — a test you ran, a screenshot you took, a behavior you watched on the device.

> AI is a great collaborator. Owning your thinking, verifying the output, and explaining your design choices is what *learning* looks like in this course.

## Submit

When the Verify checklist is green, head to **[/learn/m1/certification](/learn/m1/certification)** and submit your project link. Include 2–3 screenshots: list with multiple entries, the add form, and the detail view.

<!-- claude-template-fix: readme-v3 -->
