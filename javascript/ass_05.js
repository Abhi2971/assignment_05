    function toggleSection(sectionId) {
        var section = document.getElementById(sectionId);
        var otherSections = document.querySelectorAll('.container section[id]:not(#' + sectionId + ')');

        if (section.style.display === "none") {
            section.style.display = "block";
            // Hide other sections
            otherSections.forEach(function(otherSection) {
                otherSection.style.display = "none";
            });
        } else {
            section.style.display = "none";
        }
    }
