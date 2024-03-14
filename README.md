# Server starten

Der Server wird mittel `node server.js` gestartet.

# Communication mit dem Server

Um ein Object zu speichern brauchen wir eine ProjektId und eine Id. 
Diese sind frei wählbar.

In folgenden Beispielen gehe ich davon aus, dass der Server auf localhost:4312 ansprechbar ist.
Um ein Json object zu speichern sende ein POST oder PUT request nach localhost:4312/{projektId}/{Id} mit einem  beliebigen JSON-Object oder Array.
Um es auszulesen sende ein GET Request nach localhost:4312/{projektId}/{Id}

Ebenso unterstützt werden PATCH und DELETE Requests.

# Start server

The server is started using `node server.js`.

# Communication with the server

To save an object, we need a project ID and an ID. 
These are freely selectable.

In the following examples I assume that the server is accessible on localhost:4312.
To save a Json object, send a POST or PUT request to localhost:4312/{projektId}/{Id} with any JSON object or array.
To read it out send a GET request to localhost:4312/{projectId}/{Id}

PATCH and DELETE requests are also supported.
