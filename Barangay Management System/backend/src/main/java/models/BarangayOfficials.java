package models;

public class BarangayOfficials {
    private String officialName;
    private int age;
    private String position;
    private String status;
    private String HomeAddress;

    public BarangayOfficials(String officialName, int age, String position, String status, String HomeAddress) {
        this.officialName = officialName;
        this.age = age;
        this.position = position;
        this.status = status;
        this.HomeAddress = HomeAddress;
    }

    public String getOfficialName() {
        return officialName;
    }

    public int getAge() {
        return age;
    }

    public String getPosition() {
        return position;
    }

    public String getStatus() {
        return status;
    }

    public String getHomeAddress() {
        return HomeAddress;
    }

}
