import React from 'react';
import Footer from "@/components/footer";
import Inspiration_fetch from '@/components/inspiration_fetch';


export default function Inspiration(){
  return(
    <>
    <Inspiration_fetch/>
    <Footer/>
    </>
  )

}


/*export default function InstagramFeed () {
    const [feedData, setFeedData] = useState([]);
  
    useEffect(() => {
      async function getInstagramFeed() {
        try {
          const response = await axios.get(
            `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=IGQWRQd3Bsbmt0ZA09hZAEU3RWs3N0gzWld5N2VQQ2N3ejZAONnZARX2p6c2JnbjhVZA1M4a0R4ZAU84SlhxenA3QVZANUWZAXeG5ITnVUcEVGNEJ6bXVoN0EzclFtS0w4QUhvS3hSYmJYblIwanhOemNXMVV4ZAzlRVDVNT0kZD`
          );
          setFeedData(response.data.data);
        } catch (error) {
          console.error('Error fetching Instagram feed:', error);
        }
      }
  
      getInstagramFeed();
    }, []);
  
    return (
        <>
        <h1>My Instagram Feed</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {feedData.map((post) => (
            <div key={post.id} style={{ marginBottom: '16px' }}>
                <img src={post.media_url} alt={post.caption} style={{ width: '100%', height: 'auto' }} />
                <p>{post.caption}</p>
                <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                    View on Instagram
                </a>
            </div>
        ))}
    </div>
    </>
    )
  }*/


 

  /*const InstagramFeed = () => {
    const [hashtagId, setHashtagId] = useState(null);
    const [mediaData, setMediaData] = useState([]);
  
    useEffect(() => {
      const searchHashtag = async () => {
        try {
          const yourHashtag = 'cake'; // Replace with your actual hashtag
          const yourAccessToken = 'IGQWRQd3Bsbmt0ZA09hZAEU3RWs3N0gzWld5N2VQQ2N3ejZAONnZARX2p6c2JnbjhVZA1M4a0R4ZAU84SlhxenA3QVZANUWZAXeG5ITnVUcEVGNEJ6bXVoN0EzclFtS0w4QUhvS3hSYmJYblIwanhOemNXMVV4ZAzlRVDVNT0kZD'; // Replace with your actual access token
  
          // Step 1: Search for Hashtag
          const hashtagSearchResponse = await fetch(`https://graph.facebook.com/v12.0/ig_hashtag_search?q=${yourHashtag}&access_token=${yourAccessToken}`);
          const hashtagSearchData = await hashtagSearchResponse.json();
  
          console.log('Hashtag Search Data:', hashtagSearchData);
  
          // Assuming the first hashtag in the list is the one you're interested in
          const firstHashtag = hashtagSearchData.data[0];
  
          // Set Hashtag ID
          setHashtagId(firstHashtag.id);
  
          // Step 2: Get Recent Media from Hashtag
          const mediaResponse = await fetch(`https://graph.facebook.com/v12.0/${firstHashtag.id}?fields=recent_media{media_url,permalink,caption}&access_token=${yourAccessToken}`);
          const mediaData = await mediaResponse.json();
  
          console.log('Media Data:', mediaData);
  
          // Set Media Data
          setMediaData(mediaData.recent_media.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      searchHashtag();
    }, []); // Run once when the component mounts
  
    return (
      <div>
        <h1>Your Instagram Feed</h1>
        {hashtagId && (
          <div>
            {mediaData.map((post) => (
              <div key={post.id} style={{ marginBottom: '16px' }}>
                <img src={post.media_url} alt={post.caption} style={{ width: '100%', height: 'auto' }} />
                <p>{post.caption}</p>
                <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                  View on Instagram
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default InstagramFeed;*/
  
