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

  Cache:

  [i,ip,iph,iphon,iphone]
  Time complexity to search in array = 0(n)

      {
      i:
      ip:
      iph:
      ipho:
      iphon:
      iphone:
      }

  Time complexity to search in object / map /hashmap = 0(1)

  so better use an object than array for cache

  but new Map() is even more better

---

(usually for live apps we need web sockets but cricbuzz uses api polling 😂 after every 25 sec api is again called )

WEB SOCKETS => Its a handshake established between SERVER and UI , so that data can be sent quickly from either side i.e bi-directional data sent , no regular intervals and initial connection takes some time (Ex: Zerodha, tradings app, whatsApp,you-tube live chat)

LONG-POLLING / API POLLING => UI requests data , data flows from SEVER to UI i.e one direction and after an regular interval it happens (Ex: Gmail, cricbuzz)
