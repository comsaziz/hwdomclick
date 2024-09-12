function changeContent(elementId, newContent, originalContent) {
    const element = document.getElementById(elementId);

    element.onmouseleave = function() {
        element.textContent = originalContent;
    };

    element.onmouseenter = function() {
        element.textContent = newContent;
    };
    
}
function image(elementId, newImg, originalImg) {
    const element = document.getElementById(elementId);

    element.onmouseleave = function() {
        element.src = originalImg;
    };

    element.onmouseenter = function() {
        element.src = newImg;
    };
}


changeContent("phone", "+966553899550", "+123-456-7890");
changeContent("email", "comsaziz2@gmail.com", "hello@reallygreatsite.com");
changeContent("city", "Riyadh Monisiyah", "123 Anywhere St., Any City");
changeContent("location", "https://github.com/comsaziz", "www.reallygreatsite.com");
changeContent("year1", "2019 - 2024", "2029 - 2030");
changeContent("major", "TAIBAHU UNIVERSITY", "WARDIERE UNIVERSITY");
changeContent("speclist", "Bachelor's in Computer Science.", "Bachelor of Business");
changeContent("year2", "2019 - 2024", "2029 - 2030");
changeContent("major2", "TAIBAHU UNIVERSITY", "WARDIERE UNIVERSITY");
changeContent("spealist1", "Bachelor's in Computer Science.", "Bachelor of Business");
changeContent("spealist2", "GPA: 3.8 / 5.0", "GPA: 3.8 / 4.0");
changeContent("skil1", "JavaScript,", "Project Management");
changeContent("skil2", "HTML5", "Public Relations");
changeContent("skil3", "GitHub", "Teamwork");
changeContent("skil4", "CSS3", "Time Management");
changeContent("skil5", "PHP", "Leadership");
changeContent("skil6", "Java", "Effective Communication");
changeContent("skil7", "Microsoft SQL Server", "Critical Thinking");
changeContent("en", "English / Professional", "English (Fluent)");
changeContent("ar", "Arabic / Native", "Arabic (Fluent)");
changeContent("nam22", "Abdulaziz Alhazmi", "RICHARD SANCHEZ");
changeContent("major3", "Bachelor's in Computer Sciences.", "MARKETING MANAGER");
changeContent("profile1", "Computer science graduate with a solid background in software engineering, focused on cybersecurity and Entity Framework. Skilled in SQL Server database management and experienced in blockchain development using Solidity and Truffle.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem ipsum dolor sit        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Ut enim ad minim veniam quis nostrud exercitation.");
changeContent("exp1", "Graduation Project 2024.", "Borcelto Studio");
changeContent("exp2", "Bachelor's in Computer Sciences.", "Marketing Manager & Specialist");
changeContent("exp3", "Built a blockchain-integrated Flutter application that enables parents to establish cryptocurrency wallets for transactions.", "Create and manage the marketing budget.");
changeContent("exp4", "Utilized technologies including Solidity, Dart, JavaScript, Truffle, Flutter, Infura, and SQLite.", "Oversee market research to identify trends.");
changeContent("exp5", "Website for Hotel Reservation", "Fauget Studio");
changeContent("exp6", "Bachelor's in Computer Sciences.", "Marketing Manager & Specialist");
changeContent("exp7", "Developed a seamless platform for guests to search, select, and book hotel rooms.", "Develop and execute marketing strategies.");
changeContent("exp8", "Utilized JavaScript, HTML, CSS for front-end, and PHP for back-end.", "Monitor brand consistency across channels.");
changeContent("exp9", "Database Project", "Studio Shodwe");
changeContent("exp10", "Bachelor's in Computer Sciences.", "Marketing Manager & Specialist");
changeContent("exp11", "Streamlined gym operations by managing memberships and scheduling.", "Develop and maintain relationships with partners.");
changeContent("exp12", "Utilized PHP and MySQL for backend, and HTML and CSS for frontend.", "Monitor and maintain brand consistency.");
changeContent("fooadd", "Riyadh.", "Wardiere Inc. / CTO");
changeContent("footiphone", "Phone: +966553899550.", "Phone: 123-456-7890.");
changeContent("footemail", "Email: comsaziz2@gmail.com", "Email: hello@reallygreatsite.com");
changeContent("city1", "Madinah.", "Wardiere Inc. / CTO");
changeContent("iphone2", "Phone: +966553899550.", "Phone: 123-456-7890.");
changeContent("email3", "Email: comsaziz2@gmail.com", "hello@reallygreatsite.com");
changeContent("name_5", "Abdulaziz Alhazmi", "Estelle Darcy");
changeContent("name_6", "Abdulaziz", "Harper Richard");
image("img1", "Programming.png", "Bussines.png");

