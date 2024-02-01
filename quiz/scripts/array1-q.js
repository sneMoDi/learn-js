window.onload = function() {
    const list = document.getElementById('Top5');
    const inp = document.getElementById('inp');
    const btn = document.getElementById('btn');
    list.innerHTML = '';

    const myHistory = [];
    const MAX_HISTORY = 5;

    btn.onclick = () => {
    // A term can only be input if the search field is not blank.
      if (inp.value !== '') {
              // Clear the list to prevent showing repeated items
              // The display is refreshed with each new search input.
              list.innerHTML = '';

              myHistory.push(inp.value);

              // Remove the oldest search term if the array contains 5 or more elements
              if (myHistory.length >= MAX_HISTORY) {
                  myHistory.shift();
              }

              // Create a copy of myHistory using Array.from()
              let myHistoryCopy = myHistory.copyWithin(0);
              myHistoryCopy.sort(function (a,b) {return a.length - b.length});

              // Iterate over the ordered array, showing each query term in the sequence.
              for (const itemText of myHistoryCopy) {
                  const listItem = document.createElement('li');
                  listItem.textContent = itemText;
                  list.appendChild(listItem);
              }

              // Clear the search field and set focus on it, preparing for the next query to be typed in
              inp.value = '';
              btn.focus();
          }
    }
}