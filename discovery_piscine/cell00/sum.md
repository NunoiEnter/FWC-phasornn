## Exercise 01 — `z`

Source: :codex-file-citation{path="/home/moni/itkmitl/42/cell1.pdf" purpose="source"}

1. What: Create `ex01/z` containing `Z` and a newline.
2. How: `printf 'Z\n' > z`
3. Knowledge: `cat` displays file contents; `\n` means newline.

## Exercise 02 — `midLS`

Source: :codex-file-citation{path="/home/moni/itkmitl/42/02.pdf" purpose="source"}

1. What: List visible files/directories separated by commas.
2. How: Put this in `ex02/midLS`:

```bash
ls -m
```

3. Knowledge: `ls` lists entries; hidden files are excluded by default; `-m` adds comma formatting.

## Exercise 03 — `count_files.sh`

Source: :codex-file-citation{path="/home/moni/itkmitl/42/03.pdf" purpose="source"}

1. What: Count regular files and directories.
2. How:

```bash
find . -type f -o -type d | wc -l
```

3. Knowledge: `find` searches recursively, `-type` filters, `-o` means OR, and `wc -l` counts lines.

## Exercise 04 — `argv.sh`

Source: :codex-file-citation{path="/home/moni/itkmitl/42/coex4.pdf" purpose="source"}

1. What: Print each argument on a separate line; print `No arguments supplied` when empty.
2. How: Use `$#` to check the count and `printf '%s\n' "$@"` to print arguments.
3. Knowledge: `$#` is the argument count; `$@` contains all arguments; quoting preserves spaces.

## Exercise 05 — `build.sh`

Source: :codex-file-citation{path="/home/moni/itkmitl/42/coex5.pdf" purpose="source"}

1. What: Create directories named `ex` plus each argument.
2. How:

```bash
for arg in "$@"; do
    mkdir -p "ex${arg}"
done
```

3. Knowledge: `for` loops over arguments, `${arg}` inserts a value, and `mkdir -p` creates directories safely.

All exercises are located under `discovery_piscine/cell00` and pushed to GitHub.
