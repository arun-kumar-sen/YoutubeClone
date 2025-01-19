const [searchQuery, setSearchQuery] = useState("");
/\*\*

- Point 1 => searchQuery is a const but we are able to change it why ??
- because every time it is rendering and its a new variable
  \*/

useEffect(() => {
setTimeout(() => getSearchSuggestions(), 200);
}, [searchQuery]);

/\*\*

-
- key - i
- - render the component
- - useEffect()
- - start timer => make API call after 200 ms
-
-
- key - ip
- - render the component
- - useEffect()
- - start timer => make API call after 200ms but but but its again a new timer
- \*/

  useEffect(() => {
  /\*\*

  - Make an API call after every key press
  - but if the difference between the 2 API calls is < 200 ms
  - decline the API call
    \*/
    const timer = setTimeout(() => getSearchSuggestions(), 200);

  return () => {
  clearTimeout(timer);
  };
  }, [searchQuery]);

  /\*\*

  -
  - key - i
  - - render the component
  - - useEffect()
  - - start timer => make API call after 200 ms
  -
  -
  - key - ip
  - - destroy the component ( i.e call useEffect return method and clears the timer)
  - - re-render the component
  - - useEffect()
  - - start timer => make API call after 200ms but but but its again a new timer
  -
  - setTimeOut(200) - make an API call
  - \*/
