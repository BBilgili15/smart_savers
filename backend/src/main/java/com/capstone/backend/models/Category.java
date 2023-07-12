package com.capstone.backend.models;

public enum Category {
    POCKET_MONEY("Pocket Money","incoming"),
    GIFT("Gift", "incoming"),
    EARNINGS("Earnings","incoming"),
    OTHER_INCOME("Other","incoming"),
    ENTERTAINMENT("Entertainment","outgoing"),
    SHOPPING("Shopping","outgoing"),
    TRANSPORT("Transport","outgoing"),
    FOOD("Food","outgoing"),
    OTHER_SPEND("Other","outgoing");

    private final String categoryName;
    private final String categoryType;

    Category(String categoryName,String categoryType) {
        this.categoryName = categoryName;
        this.categoryType = categoryType;
    }

    public String getCategoryType() {
        return categoryType;
    }
}
