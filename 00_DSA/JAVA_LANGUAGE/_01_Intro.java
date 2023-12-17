        // Types of Languages
        /*
        1) Procedural
        2) Functional
        3) Object-Oriented

        Procedural Language:
        1) It specifies a series of well-structured steps and procedures to compose a program.
        2) Contains a systematic order of statements, functions and commands to complete a task.
        3) Basically, the program gets executed line by line.
        4) Ex: Java, C++, Python

        Functional Language:
        1) Writing a program only in pure functions i.e, never modify variables, but only create new ones as an output.
        2) Used in situation where we have to perform lots of different operations on the same set of data, like ML.
        3) First Class functions? Ex: Python

        Object-Oriented Language:
        1) Revolves around Objects
        2) Code + Data = Object
        3) Developed to make it easier to develop, debug, reuse and maintain software.
        */

        // Another Types of Language
        /*
        1) Static
        2) Dynamic

        Static:
            — Perform type checking at compile time.
            — Errors will Show at compile time.
            — Declare datatype before you use it.

        Dynamic:
            — Perform type checking at runtime.
            — Errors might not show till program runs.
            — No need to declare datatype of variables.
        * */

        // JDK vs JRE vs JVM vs JIT
        /*
        JDK contains JRE + development tools. (Java Development Kit)
                * Inside JDK we have JRE which contains JVM + Library classes.
                        * Inside JRE we have JVM i.e., Java Virtual Machine.
                                * JIT (Just in Time).
        */

        // Java Source Code ➔ JDK ➔ Bytecode ➔ (JVM ➔ JRE)

        // In Compile time
            // In compile time .java file is converted to .class file.

        // In Run time
            // class loader --> Byte code verifier --> Interpreter --> Runtime --> Hardware.

        // JVM Execution:
        /*
        Interpreter:
            -- line by line execution.
            -- when one method is called many times, it will interpret again and again.
        JIT:
            -- those methods that are repeated, JIT provides direct machine code so re-interpretation is not required.
            -- makes execution faster.
            -- garbage collector.
        */

        // How JVM works i.e., class loader works ?
        /*
        --loading:
            1) Reads .class file and generate binary data.
            2) an object of this class is created in heap.
        --linking:
            1) JVM verifies the .class file.
            2) Allocates memory for class variables and default values.
            3) Replace symbolic references from the type with direct references.
        --initialization: all static variables are assigned with their values defined in the code and static block.

        JVM contains the stack and heap memory allocations.

        */
public class _01_Intro {
    // Class Intro
    /* Class is a named group of properties and methods.
    *  Class helps create our own data type.
    *  Class is a template of an object. An object is an instance of a class.*/
    // Every file with .java extension is a class itself.
    public static void main(String[] args) {
        /* 1) Class is a named grouped of properties and methods.
        2) Since the class is public, the main function is also public so that it can be accessed so that the code can run. Hence it acts an entry point.
        3) Static keyword helps us run the program without creating an object of the class i.e., the main class.
        4) String[] args = Command Line Arguments, Collection of strings.
        5) Only one class can be public, i.e., which has the main function in it.
        6) Package is the folder in which the java file exists. It is important to apply rules while providing access to files in other packages.
        7) System.out.println ➔ System is a class inherited. out is a variable. Out has a method println. Out is the reference variable.
        8) Scanner is a simple text scanner which can parse primitive types and strings using regular expressions.
            A Scanner breaks its input into tokens using a delimiter pattern, which by default matches whitespace.
            The resulting tokens may then be converted into values of different types using the various next methods. */
        System.out.println("Introduction to Language Java !!!");
    }
}
