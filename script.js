document.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('.tile');

    tiles.forEach((tile) => {
        tile.addEventListener('click', () => {
            // If the tile is already active, remove the active and flipped states
            if (tile.classList.contains('active')) {
                tile.classList.remove('active', 'flipped');
                return; // Exit early
            }

            // Otherwise, reset all tiles to their default state
            tiles.forEach((t) => t.classList.remove('active', 'flipped'));

            // Add flipped and active states to the clicked tile
            tile.classList.add('flipped', 'active');
        });
    });
});
