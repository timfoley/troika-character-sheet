# Online Troika! Character Sheet
Test it out at: http://candy-thistle.surge.sh/

This is my version of an online character sheet for the [Troika!](https://www.troikarpg.com/#!) tabletop roleplaying game.

I wanted it to be as useful as possible while still staying nice and simple. Your character data is saved to localStorage whenever you make an update, and if you want to "save" or share a character, you can paste JSON data into a text box.

This is still very much a work-in-progress!

# What It's Made Of
It's mostly just React (thanks [`create-react-app`](https://facebook.github.io/create-react-app/)) with a lot of help from the amazing [CSS Grid spec](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout).

## To Dos:
### Definitely:
- [ ] figure out a good way to let you delete skills and weapons
  - right now the best way is to edit the data directly in the import/export screen
- [ ] drag-and-drop reordering of skills, weapons, and inventory
- [ ] figure out a way to keep track of advancement ticks
- [ ] auto-character generation
- [x] set up print stylesheets (mostly done, they could be better though)

### Maybe (pending feedback and testing)
- [ ] host data somewhere?
  - on making a character, you get a read-only, shareable link and a private link with write-access
- [ ] click to test a skill/roll damage
- [ ] handle additional inventory/gear fields
  - i.e. how to deal with quantity, gear that takes up multiple slots, notes, etc.
