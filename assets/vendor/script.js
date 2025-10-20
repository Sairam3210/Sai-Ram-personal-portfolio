document.addEventListener('DOMContentLoaded', function() {
    // We will use a temporary variable for the full name run, 
    // then use the original list for the loop.
    
    // 1. The full list of strings, including the initial name
    const fullStrings = [

        // *** LOOPING STRINGS: Your extended professional qualities ***
        "   PASSIONATE LEARNER.",
        "   DEEP LEARNING ENTUSIAST.",
        "   QUICK LEARNER.",
    ];
    
    // 2. Configuration for the typing animation
    var options = {
        strings: fullStrings, // Use the full list for the first run
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '_',
        
        // *** KEY CHANGE: Hook to change the strings after the first loop ***
        onComplete: function(self) {
            // After the first full run (which includes the name),
            // we set the strings to start from the first professional quality (index 1 in the original list)
            // and remove the name from the looping sequence.
            self.strings = fullStrings.slice(1);
            self.loop = true; // Ensure looping is set to true
        }
    };

    // Initialize Typed.js on the element with the class 'typing'
    var typed = new Typed('.typing', options);
});




