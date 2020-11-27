// (C) Copyright 2009-2020 Micro Focus or one of its affiliates.
package demo;

public class FibResponse {

    public int n;
    public int fibN;

    public FibResponse() {
    }

    public FibResponse(int n, int fibN) {
        this.n = n;
        this.fibN = fibN;
    }

    @Override
    public String toString() {
        return "FibResponse{" +
            "n=" + n +
            ", fibN=" + fibN +
            '}';
    }
}
