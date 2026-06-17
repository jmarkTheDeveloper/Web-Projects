package models;

public class Users {
    private String residentId;
    private String residentName;
    private String email;
    private String phoneNumber;
    private String gender;
    private String location;

    public Users(String residentId, String residentName, String email, String phoneNumber, String gender,
            String location) {
        this.residentId = residentId;
        this.residentName = residentName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.location = location;
    }

    public String getResidentId() {
        return residentId;
    }

    public String getResidentName() {
        return residentName;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getGender() {
        return gender;
    }

    public String getLocation() {
        return location;
    }

    @Override
    public String toString() {
        return "Resident Name: " + residentName + "\n" +
                "Email: " + email + "\n" +
                "Phone Number: " + phoneNumber + "\n" +
                "Gender: " + gender + "\n" +
                "Location: " + location;
    }

}