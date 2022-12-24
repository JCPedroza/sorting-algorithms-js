if ! command -v node
then
    printf "\nThe 'node' command cannot be found.\n"
    printf "You need NodeJS installed to run this script.\n\n"
    exit
fi

printf '\n'
time sh -c 'node ./tests/sort.test.js'
printf '\n'
