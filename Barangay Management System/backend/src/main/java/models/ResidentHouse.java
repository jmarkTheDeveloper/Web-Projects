package models;

public class ResidentHouse {
    private String address;
    private String HomeNumber;
    private String HomeType;
    private String HomeFloors;
    private String barangay;

    public ResidentHouse(String address, String HomeNumber, String HomeType, String HomeFloors, String barangay) {
        this.address = address;
        this.HomeNumber = HomeNumber;
        this.HomeType = HomeType;
        this.HomeFloors = HomeFloors;
        this.barangay = barangay;
    }

    public String getAddress() {
        return address;
    }

    public String getHomeNumber() {
        return HomeNumber;
    }

    public String getHomeType() {
        return HomeType;
    }

    public String getHomeFloors() {
        return HomeFloors;
    }

    public String getBarangay() {
        return barangay;
    }

    public String toString() {
        return "Address: " + address + "\n" +
                "Home Number: " + HomeNumber + "\n" +
                "Home Type: " + HomeType + "\n" +
                "Home Floors: " + HomeFloors;
    }
}
