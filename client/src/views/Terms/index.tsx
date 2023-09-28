import './Terms.css';

const Terms = () => {
    const data = [
        {
            term: 'Anchorman',
            definition: 'When seated at the blackjack table, the last player to act before the dealer is called the Anchorman.'
        },
        {
            term: 'Bankroll',
            definition: 'The money you have available to gamble with is called your bankroll. It would help if you did not confuse this with your total available cash - only count the portion you are willing to risk in a casino.'
        },
        {
            term: 'Blackjack',
            definition: 'Blackjack is the name of the game, but also the perfect hand to receive - one ace and one ten or a picture card, making 21.'
        },
        {
            term: 'Burn Card',
            definition: 'Before the dealer commences dealing, he places the first card to one side, face down. This is the burn card, designed to make it impossible for the first player to know what the first card is going to be (which would affect how he bets).'
        },
        {
            term: 'Bust',
            definition: 'Bust is a word you never wish to be applied to you. Bust means you have run out of money (it is not the end of the world if you lose your bankroll, so long as you did separate it from your day-to-day living funds).'
        },
        {
            term: 'Cold Deck',
            definition: 'If the shoe, the name applied to the box holding the cards, is spewing out awful cards and causing the players to lose too much, it is known as a cold deck, as opposed to the players running hot.'
        },
        {
            term: 'Color Up',
            definition: 'If a player has lots of low denomination chips, he might ask the dealer to color up some of them, changing many small-value chips for higher-value ones.'
        },
        {
            term: 'Cut Card',
            definition: 'When a new shoe, complete with shuffled cards, is introduced, the dealer asks one player to cut the deck with a cut card. The cut card then signals when action with that shoe finishes, and a new one is required.'
        },
        {
            term: 'Discards',
            definition: 'All cards that have already been dealt are discards, which then sit idly to one side until a new shoe is needed, and they get reshuffled and re-used.'
        },
        {
            term: 'Double Down',
            definition: 'If luck is on your side, you have a promising starting hand, and the dealer looks weak—time to double down and double your initial wager. If your hand holds up, you win twice as much as you would have done. However, if it loses… well, let’s not go there.'
        },
        {
            term: 'House Edge',
            definition: 'The house edge is the expected advantage the house or casino has in a particular game. In blackjack, against players with a basic knowledge of blackjack strategy, the house edge is little over 1%. This means that on average, for every $100 you gamble, you’ll lose $1.'
        },
        {
            term: 'Flat Betting',
            definition: 'When a player bets the same amount consistently, hand after hand, he is considered to be flat betting. It’s perfectly okay to flat bet, but just not very adventurous.'
        },
        {
            term: 'Hit',
            definition: 'When you wish the dealer to give you another card, you hit.'
        },
        {
            term: 'Surrender/Late Surrender',
            definition: 'In some variations of blackjack, you can surrender your hand without making any further decisions. You will receive only half of your stake back, but if your hand looks a dud, you potentially save some money.'
        },
        {
            term: 'Multi Deck',
            definition: 'Most blackjack games in a casino have multi decks, rather than using one deck of cards. Many games will use six to eight decks at a time.'
        },
        {
            term: 'Pit',
            definition: 'The table area you sit at for your blackjack game is called the pit, overseen by an often stern-looking casino employee called a pit boss.'
        },
        {
            term: 'Split',
            definition: 'If you receive two cards of the same value, you have the option to split, matching your initial wager. Now you play two separate hands.'
        },
        {
            term: 'Stand',
            definition: 'If you like your first two cards or have hit and taken another, you can choose to stand at any time, meaning you won’t take another.'
        },
        {
            term: 'Toke',
            definition: 'Toke is a casino term for a tip. In bricks and mortar casino games, you don’t have to tip the staff, but they don’t get paid massive amounts, and it’s nice to show your appreciation once in a while.'
        },
        {
            term: 'Up Card',
            definition: 'You only get to see one face-up card for the dealer while you are playing your hands. This is the up card, while his other card remains face down.'
        }
    ]

    return (
        <div className='term-container'>
            {data.map((data,i) => {
                return (
                    <div className='term-row' key={i}>
                        <h1 className='term-text'>{data.term}:</h1>
                        <p className='term-text'>{data.definition}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Terms;