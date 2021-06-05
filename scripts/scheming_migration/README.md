# Schema migration tool

This script is a one-off update tool for the DataBC Catalogue's CKAN schema. It's meant to be applied to a preexisting postgres database.

## Requirements

This will not work with node versions >= 14  because of [Version Compatibility](https://node-postgres.com/#version-compatibility)
issues with its `pg` library dependency. It has been tested with node v13.14.0.

## Configuration

This tool is configured using the following environment variables:

|Variable|Default|
|--------|-------|
|DB_USER|ckan|
|DB_HOST|127.0.0.1|
|DB_NAME|ckan|
|DB_PASS|ckan|
|DB_PORT|5432|

## Usage

Install dependencies using `node ci`, configure environment variables using your method of choice, and then use a suitable version of node (< 14) on index.js.
    
    % node ci
    % node -v
    v13.14.0
    % DB_USER=example DB_NAME=exampledb DB_PASS=supersecret node index.js
