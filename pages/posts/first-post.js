import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script' 
import Layout from '../../components/layout'

export default function FirstPost() { 
	return (
	<Layout>	
		<Head> 
			<title>Lorem Ipsum</title>
		</Head>
		<h1>Lorem Ipsum</h1> 
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget consequat urna. Curabitur maximus, magna nec lobortis feugiat, sem lacus pellentesque sem, ac consequat dolor justo quis risus. Aenean suscipit pharetra eros. </p>
<p> 
Nunc et metus ac sapien luctus interdum. In facilisis luctus magna eget pretium. Quisque sodales quam quis neque efficitur, vel laoreet nunc interdum. Cras nec dignissim lacus, sed faucibus orci. Ut a viverra tortor, in bibendum nunc. Aliquam magna dolor, pellentesque vitae justo venenatis, eleifend efficitur arcu. Integer pulvinar tristique mollis. Proin faucibus venenatis neque et pretium.

In aliquet sem in nulla facilisis, a pulvinar magna commodo. Donec at tortor sodales, vulputate leo at, mollis eros. Praesent vitae lorem a odio fringilla imperdiet. Curabitur porta risus ac laoreet dictum. Donec vestibulum blandit consequat. Etiam nec aliquam dui, eu efficitur arcu. Vestibulum viverra, dolor non convallis tincidunt, nibh enim gravida mauris, nec pellentesque lectus justo sed enim. Suspendisse potenti.  
</p>
		<h2>
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</h2>
	</Layout>
	)
}
