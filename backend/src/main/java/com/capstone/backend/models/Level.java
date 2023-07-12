package com.capstone.backend.models;

public enum Level {
    ONE(1, "Super Saver"),
    TWO(2, "Money Maestro"),
    THREE(3, "Financial Guru");

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
