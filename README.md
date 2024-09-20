# Listing GitHub Events
- Listar eventos públicos no geral (Volume massivo de dados)

   - Endpoint: https://api.github.com/events

   - Exemplo de retorno: https://gist.githubusercontent.com/henriqueln7/91bba89c5a7263a56169c84b46c609a7/raw/c9116d53b0aa63bdc5e63bebc488d867ab746a47/list_events_all_public.json

   - Possíveis usos:

        - Filtrar por tipos de eventos

- Listar eventos de um repositório

   - Endpoint: https://api.github.com/repos/rails/rails/events

   - Exemplo de retorno: https://gist.githubusercontent.com/henriqueln7/1ca0c58ff3e8e4cf929ee77d90a9f9b3/raw/059885fc4a899a5d95e6ccd8a6bc38401bdfece7/list_events.json

   - Possíveis usos:
        - Filtrar por tipos de eventos. 
        - Visualizar a frequência de cada evento
