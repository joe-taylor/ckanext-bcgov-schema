# Schema migration tool

This script is a one-off update tool for the DataBC Catalogue's CKAN schema. It's meant to be applied to a preexisting postgres database.

## Requirements

This will not work with node versions >= 14  because of [Version Compatibility](https://node-postgres.com/#version-compatibility)
issues with its `pg` library dependency. It has been tested with node v13.14.0.

## Usage

    node ci
    node index.js
