// Re-render Mermaid diagrams when navigating via anchor links
document.addEventListener("DOMContentLoaded", function() {
    // Function to re-render all Mermaid diagrams
    function renderMermaidDiagrams() {
        if (typeof mermaid !== 'undefined') {
            // Find all mermaid diagram divs
            var diagrams = document.querySelectorAll('.mermaid');
            diagrams.forEach(function(diagram) {
                // Check if already rendered
                if (diagram.getAttribute('data-processed')) return;

                // Get the mermaid code from the element
                var code = diagram.getAttribute('data-code') || diagram.textContent.trim();
                if (code) {
                    try {
                        mermaid.run([{
                            nodes: [diagram],
                            generateSvg: true
                        }]);
                        diagram.setAttribute('data-processed', 'true');
                    } catch (e) {
                        console.error('Mermaid render error:', e);
                    }
                }
            });
        }
    }

    // Re-render on hash change (for anchor navigation)
    window.addEventListener('hashchange', function() {
        setTimeout(renderMermaidDiagrams, 100);
    });

    // Also re-render on navigation events
    var originalPushState = history.pushState;
    history.pushState = function() {
        originalPushState.apply(this, arguments);
        setTimeout(renderMermaidDiagrams, 100);
    };
});