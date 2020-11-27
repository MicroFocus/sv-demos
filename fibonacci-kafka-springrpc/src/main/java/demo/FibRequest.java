// (C) Copyright 2009-2020 Micro Focus or one of its affiliates.
package demo;

public class FibRequest {

    public int n;

    public FibRequest() {
    }

    public FibRequest(int n) {
        this.n = n;
    }

    @Override
    public String toString() {
        return "FibRequest{" +
            "n=" + n +
            '}';
    }
}
