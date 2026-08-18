
    // const sayhi=(name)=>{
    // console.log(`Welcome to ${name}`)
    // }
    
    // sayhi("shopping cart🙃")

    import readline from 'readline/promises';
    import {stdin, stdout} from 'process';


    const main=async ()=>{
        const cin=readline.createInterface({input:stdin,output:stdout});
        let choice;
        do{
        console.log("Welcome to shopping cart🙃");
        console.log("1           Add item to cart");
        console.log("2           Show item to cart");
        console.log("3           Remove item from cart");
        console.log("4           Update quantity");
        console.log("5           Checkout") ; 
        choice=await cin.question("Enter your choice: ");
       
        switch(Number(choice)){
            case "1":
                console.log("Add item to cart");
                break;
            case "2":
                console.log("Show item to cart");
                break;
            case "3":
                console.log("Remove item from cart");
                break;
            case "4":
                console.log("Update quantity");
                break;
            case "5":
                console.log("Checkout");
                break;
            default:
                console.log("Invalid choice");
                
        }
        }
        while(choice!=="5");
        cin.close();
    };
    main();