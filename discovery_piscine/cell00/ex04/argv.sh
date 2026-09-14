#!/bin/bash

if [ "$#" -eq 0 ]; then
	printf '%s\n' 'No arguments supplied'
else
	printf '%s\n' "$@"
fi
