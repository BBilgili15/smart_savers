package com.capstone.backend.models;

public enum Level {
    ONE(1, "Money Explorer"),
    TWO(2, "Saving Star"),
    THREE(3, "Financial Wizard");

    private final int level;

    private final String title;

    Level(int level, String title) {
        this.level = level;
        this.title = title;
    }

    public int getLevel() {
        return level;
    }

    public String getTitle() {
        return title;
    }
}
