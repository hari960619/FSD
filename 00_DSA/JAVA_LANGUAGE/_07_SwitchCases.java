import java.util.Scanner;

public class _07_SwitchCases {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        // Simple Switch case
        int dayNumber = scan.nextInt();
        // Old Syntax
        switch (dayNumber) {
            case 1:
                System.out.println("Sunday");
                break;
            case 2:
                System.out.println("Monday");
                break;
            case 3:
                System.out.println("Tuesday");
                break;
            case 4:
                System.out.println("Wednesday");
                break;
            case 5:
                System.out.println("Thursday");
                break;
            case 6:
                System.out.println("Friday");
                break;
            case 7:
                System.out.println("Saturday");
                break;
            default:
                System.out.println("Enter a day between 1 to 7 !!!");
        }
        // New Syntax
        switch (dayNumber) {
            case 1 -> System.out.println("Sunday");
            case 2 -> System.out.println("Monday");
            case 3 -> System.out.println("Tuesday");
            case 4 -> System.out.println("Wednesday");
            case 5 -> System.out.println("Thursday");
            case 6 -> System.out.println("Friday");
            case 7 -> System.out.println("Saturday");
            default -> System.out.println("Enter a day between 1 to 7 !!!");
        }

        // Trap Clearing
        scan.nextLine();

        // Nested Switch Case
        String role = scan.nextLine();
        switch (role){
            case "Cx" -> System.out.println("Unauthorized !!!");
            case "Admin" -> System.out.println("Please get Manager Permission !!!");
            case "Manager" -> {
                System.out.println("Enter Password:");
                switch (scan.nextInt()) {
                    case 12345 -> System.out.println("Welcome Mr. Manager!!!");
                    case 12340 -> System.out.println("One key wrong !!!");
                    default -> System.out.println("Get out fraud !!!");
                }
            }
            default -> System.out.println("Who r u MAN ?");
        }
    }
}
