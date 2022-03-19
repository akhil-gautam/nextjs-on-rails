#!/bin/bash
set -e

bin/rails db:prepare

# Remove a potentially pre-existing server.pid for Rails.
if [ -e tmp/pids/server.pid ]; then
  rm tmp/pids/server.pid
fi

# exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
