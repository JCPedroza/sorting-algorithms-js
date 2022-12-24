# Run unit tests with Deno

if ! command -v deno
then
  printf '\nThe 'deno' command cannot be found.\n'
  printf 'You need Deno installed to run this script.\n\n'
  exit
fi

printf '\n'
time sh -c 'deno run ./tests/sort.test.js'
printf '\n'
