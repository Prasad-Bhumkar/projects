import java.util.UUID;

public class BlackboxInviteGenerator {

    public static void main(String[] args) {
        int numberOfInvites = 10; // You can change this to generate more or fewer invites

        for (int i = 0; i < numberOfInvites; i++) {
            String couponId = generateCouponId();
            String inviteMessage = generateInviteMessage(couponId);
            System.out.println(inviteMessage);

            String couponId = generateCouponId();
            String inviteMessage = generateInviteMessage(couponId);
            System.out.println(inviteMessage);
        }
    }

    public static String generateCouponId() {
        return UUID.randomUUID().toString();
    }

    public static String generateInviteMessage(String couponId) {
        String message = "Hi there,\n\n" +
                "I'd like to invite you for FREE access to Blackbox AI.\n\n" +
                "1. First install the extension here https://bit.ly/4fMmAXM\n\n" +
                "2. Insert your Coupon ID: " + couponId + "\n\n" +
                "3. Enjoy unlimited FREE Access!\n\n" +
                "Looking forward to have you try out the platform!\n\n" +
                "Best";
        return message;
    }
}
