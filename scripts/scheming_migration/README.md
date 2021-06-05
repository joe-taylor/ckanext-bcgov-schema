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
    {
      user: 'example',
      host: '127.0.0.1',
      database: 'exampledb',
      password: 'supersecret',
      port: 5432
    }
    Progress: 0.1%    
    
In order for your database migration to have a visible effect, you'll want to reindex solr as well. Documenting that process is out of scope for this README (mainly because it depends on how ckan was set up) but for a [terraformed local dev environment](https://github.com/bcgov/ckan-bcgov-terraform) it will look something like this:

    % pwd
    ~/ckan-bcgov-terraform/src
    
    % source ./venv/bin/activate
    
    (venv) % paster --plugin=ckan search-index rebuild -c conf/ckan.ini
