# Schema migration tool

This script is a one-off to make updates to the DataBC Catalogue's schema in a pre-existing database.

## Requirements

This will not work with node versions >= 14  because of [Version Compatibility](https://node-postgres.com/#version-compatibility)
issues with its `pg` library dependency. It has been tested with node v13.14.0.

## Usage

`node index.js`
