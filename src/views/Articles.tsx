import { Article } from '@/components'

import bitcoinist from "@/assets/images/articles/bitcoinist.jpg";
import btcmanager from "@/assets/images/articles/btcmanager.jpg";
import businessinsider from "@/assets/images/articles/businessinsider.jpg";
import cio from "@/assets/images/articles/cio.jpg";
import coinidol from "@/assets/images/articles/coinidol.jpg";
import coinspeaker from "@/assets/images/articles/coinspeaker.jpg";
import herb from "@/assets/images/articles/herb.jpg";
import huffpost from "@/assets/images/articles/huffpost.jpg";
import insidebitcoins from "@/assets/images/articles/insidebitcoins.jpg";
import merkle from "@/assets/images/articles/merkle.jpg";
import newsbtc from "@/assets/images/articles/newsbtc.jpg";
import steemit from "@/assets/images/articles/steemit.jpg";
import superbcrew from "@/assets/images/articles/superbcrew.jpg";
import techco from "@/assets/images/articles/techco.jpg";
import technobuffalo from "@/assets/images/articles/technobuffalo.jpg";
import tfm from "@/assets/images/articles/tfm.jpg";
import tnw from "@/assets/images/articles/tnw.jpg";
import yahoo from "@/assets/images/articles/yahoo.jpg";

export function Articles() {
	const articles = [
		bitcoinist,
		btcmanager,
		businessinsider,
		cio,
		coinidol,
		coinspeaker,
		herb,
		huffpost,
		insidebitcoins,
		merkle,
		newsbtc,
		steemit,
		superbcrew,
		techco,
		technobuffalo,
		tfm,
		tnw,
		yahoo,
	];

	return (
		<div className="articles flex flex-col gap-2">
			{articles.map((article, i) => (
				<Article key={i} src={article} />
			))}
		</div>
	);
}
