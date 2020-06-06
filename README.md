# police-brutality-site

## TODO

- Embeds
- All incidents (ordered by most recent desc)
  - Primitive Pagination
- Individual incident page
- Call to action
- Map

- Updates after data is improved:
  - Use supplied id (once it is supplied)
  - Tags; tag pages

## Data

Dataset: https://github.com/2020PB/police-brutality

Converted into `PbIncident` GraphQL nodes.

Fields:
- id (internal)
- name
- links ([String])
- date
- city (City)
- state (State)
- edit_at
