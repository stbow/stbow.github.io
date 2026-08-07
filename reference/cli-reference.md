# Command Line Basics

## Navigation

- `pwd` = print working directory (current location)
- `mkdir` = make directory
- `ls` = list
    - `-a` = show hidden
    - `-l` = details
    - `-lh` = details with human readable sizes
    - `-R` = recursive list — everything in subfolders
    - `-t` = sort by time
- `cd` = change directory
    - `~` or no arg = go to home
    - `..` = move up one level
    - `../../` = move up 2 levels
    - `-` = previous directory
    - `/` = root directory
- `mv [source] [dest]` = move or rename
- `rm [file]` = remove file
    - `rm -r [folder]` = remove whole folder

## Copy

- `cp` = copy
    - `-r` or `-R` = recursive — everything in subfolders (needed to copy a whole folder)
    - `-u` = update — only copies if source is newer or destination is missing
    - `-v` = verbose — displays a message for each file
    - `-n` = no-clobber — prevents overwriting any existing files in destination
    - `-f` = force — overwrites without prompting

## Permissions

- `chown` = change owner
- `chmod` = change permissions
    - `-R [folder]` = apply recursively to subfolders
    - `777` = full permissions for everyone

## Shortcuts

- ++ctrl+l++ = clear screen
- ++ctrl+c++ = cancel command
- ++ctrl+r++ = search history (press, then start typing a past command)
