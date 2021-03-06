#!/bin/sh
# (C) Copyright 2009-2020 Micro Focus or one of its affiliates.

# find JAVA binary
if [ -n "$JAVA_HOME" ]; then
    JAVA_BIN="$JAVA_HOME/bin/java"
    if [ ! -x "$JAVA_BIN" ]; then
        JAVA_BIN="$JAVA_HOME/jre/bin/java"
    fi
else
    JAVA_BIN=`which java`
fi
if [ -z "$JAVA_BIN" ] || [ ! -x "$JAVA_BIN" ]; then
    echo "No Java found. Please put Java bin directory into your PATH environment or set JAVA_HOME environment variable to valid Java installation."
    exit 1
fi

${JAVA_BIN} -cp ../lib/*:target/classes demo.SpringRpcClient
