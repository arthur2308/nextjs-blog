import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script' 
import Layout from '../../components/layout'

export default function FirstPost() { 
	return (
	<Layout>	
		<Head> 
			<title>First Post</title>
		</Head>
		<Script
			src="https://connect.facebook.net/en_US/sdk.js"
			strategy="lazyOnload"
			onLoad={() => 
				console.log(`FB script loaded, window.FB object has been populated`)
			}
			/>	
		<h1>Acid Trip</h1> 
		<p>The first time I tried LSD, was when I was 19. The three of us took one tab each. One bgan to laugh hysterically, while I was beginning to feel the come-up, and the nauseousness that usually comes with it. The friend with LSD tabs also had a weed with them, and offered us to join and smoke. What I didn't know is how dramaatic the weed will turn the trip to be.</p>
<p> 
At that time I was in school, looking for my 'purpose', like many others my age. I had been reading material on brain, the subconsious, and spirituality. If you asked me then if I was a Christian, I would answer that I was a Budhist, and I would explain how you can be both. But in my circle of people, those two were mutually-exclusive. You cannot be both, they would say. I could not understand why not, and argue. Some even stopped beong friends with me over my 'blasphemy'. 

Back to the acid trip, after inhaling the bong, I suddenly felt an overwhelming feeling of being somewhere else, somewhere where things looked like a peaceful Japanese, zen garden to Turkish yurts in a form of a cone to illuminati-triangles floatingmid-air, to little budhas peacfully smiling around me, to plants being/feeling alive. It felt as if everything was more alive and breathing. The feeling however did not scare me as you might expect, instead it felt familiar even though I have never seen anything like it before.  
</p>
		<h2>
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</h2>
	</Layout>
	)
}
