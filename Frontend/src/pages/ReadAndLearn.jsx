import React from "react";

const ReadAndLearn = () => {
  return (
    <div className="container mx-auto px-6 py-8 text-[#362511]">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-[#362511]">
        Chess Documentation
      </h1>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Chess Basics */}
        {/* Chess Basics */}
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#362511] mb-6 text-center">
            Chess Basics
          </h2>
          <p className="text-[#362511] text-lg leading-relaxed mb-6">
            Chess is a two-player strategy game played on an 8x8 board. It is
            one of the most popular board games in India and the world, known
            for its deep strategic and tactical elements.
          </p>

          {/* What is Chess */}
          <h2 className="text-2xl font-semibold text-[#362511] mb-4 flex items-center">
            <span className="mr-2">♟️</span> What is Chess?
          </h2>
          <p className="text-[#362511]">
            Chess is a game that involves planning, tactics, and strategy. The
            goal is to <strong>checkmate</strong> the opponent’s king, meaning
            the king is under attack and has no legal moves to escape.
          </p>

          <h3 className="text-xl font-semibold text-[#362511] mt-4 flex items-center">
            <span className="mr-2">📜</span> Origins of Chess
          </h3>
          <ul className="list-disc list-inside text-[#362511] space-y-2">
            <li>
              Chess originated in <strong>India</strong> around the 6th century
              as "Chaturanga."
            </li>
            <li>
              It spread to Persia and then Europe, evolving into modern chess.
            </li>
            <li>
              The first official <strong>World Chess Championship</strong> was
              held in 1886.
            </li>
          </ul>

          {/* How to Play Chess */}
          <h2 className="text-2xl font-semibold text-[#362511] mt-6 mb-4 flex items-center">
            <span className="mr-2">🎲</span> How to Play Chess
          </h2>
          <p className="text-[#362511]">
            Chess is played on a board consisting of 64 squares. Each player
            starts with 16 pieces, and the goal is to checkmate the opponent’s
            king—meaning the king is in a position to be captured and has no
            legal move to escape.
          </p>

          {/* Chess Pieces and Setup */}
          <h3 className="text-xl font-semibold text-[#362511] mt-4 flex items-center">
            <span className="mr-2">🛡️</span> Chess Pieces and Their Setup
          </h3>
          <p className="text-[#362511]">
            At the beginning of the game, each player arranges their pieces on
            the first two rows:
          </p>
          <ul className="list-disc list-inside text-[#362511] space-y-2">
            <li>
              <strong>King</strong>: 1 per player – The most important piece.
            </li>
            <li>
              <strong>Queen</strong>: 1 per player – The most powerful piece.
            </li>
            <li>
              <strong>Rooks</strong>: 2 per player – Placed in the corners.
            </li>
            <li>
              <strong>Knights</strong>: 2 per player – Positioned next to the
              rooks.
            </li>
            <li>
              <strong>Bishops</strong>: 2 per player – Placed beside the
              knights.
            </li>
            <li>
              <strong>Pawns</strong>: 8 per player – Positioned in front of all
              other pieces.
            </li>
          </ul>

          {/* How the Pieces Move */}
          <h3 className="text-xl font-semibold text-[#362511] mt-4 flex items-center">
            <span className="mr-2">🔄</span> How the Pieces Move
          </h3>
          <ul className="list-disc list-inside text-[#362511] space-y-2">
            <li>
              <strong>Pawn</strong>: Moves forward but captures diagonally.
            </li>
            <li>
              <strong>Knight</strong>: Moves in an "L" shape and can jump over
              pieces.
            </li>
            <li>
              <strong>Bishop</strong>: Moves diagonally any number of squares.
            </li>
            <li>
              <strong>Rook</strong>: Moves straight horizontally or vertically.
            </li>
            <li>
              <strong>Queen</strong>: Moves in all directions any number of
              squares.
            </li>
            <li>
              <strong>King</strong>: Moves one square in any direction.
            </li>
          </ul>

          {/* Special Rules in Chess */}
          <h3 className="text-xl font-semibold text-[#362511] mt-4 flex items-center">
            <span className="mr-2">✨</span> Special Rules in Chess
          </h3>
          <ul className="list-disc list-inside text-[#362511] space-y-2">
            <li>
              <strong>Castling</strong>: Moves the king and rook simultaneously
              for king safety.
            </li>
            <li>
              <strong>En Passant</strong>: A special pawn capture rule.
            </li>
            <li>
              <strong>Pawn Promotion</strong>: Pawns reaching the last rank can
              be promoted.
            </li>
            <li>
              <strong>Checkmate</strong>: The king is trapped with no escape.
            </li>
            <li>
              <strong>Stalemate</strong>: A situation where a player has no
              legal moves, resulting in a draw.
            </li>
          </ul>

          {/* Winning the Game */}
          <h3 className="text-xl font-semibold text-[#362511] mt-4 flex items-center">
            <span className="mr-2">🏁</span> Winning the Game
          </h3>
          <p className="text-[#362511]">
            The game ends when a player checkmates the opponent's king. Other
            possible outcomes include draws due to stalemate, insufficient
            material, or threefold repetition.
          </p>

          {/* Top Chess Players in India */}
          <h2 className="text-2xl font-semibold text-[#362511] mt-6 mb-4 flex items-center">
            <span className="mr-2">🇮🇳</span> Top Chess Players in India
          </h2>
          <p className="text-[#362511]">
            India has produced some of the world's greatest chess players:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-10">
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold">♔ Viswanathan Anand</h4>
              <p className="text-[#362511] text-sm">
                5-time World Champion, India's first Grandmaster (1988).
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold">♘ D. Gukesh</h4>
              <p className="text-[#362511] text-sm">
                Youngest Indian Grandmaster and a top international player.
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold">♙ R. Praggnanandhaa</h4>
              <p className="text-[#362511] text-sm">
                Competed in the 2023 Chess World Cup Final.
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold">♖ Vidit Gujrathi</h4>
              <p className="text-[#362511] text-sm">
                Strong Grandmaster and Olympiad team player.
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold">♕ Arjun Erigaisi</h4>
              <p className="text-[#362511] text-sm">
                A rising star in rapid chess.
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold">♗ Koneru Humpy</h4>
              <p className="text-[#362511] text-sm">
                Former Women's Rapid World Champion.
              </p>
            </div>
          </div>

          {/* How to Build a Career in Chess */}
          <h2 className="text-3xl font-bold text-[#362511] mb-6 text-center">
            How to Build a Career in Chess
          </h2>

          <p className="text-[#362511] text-lg leading-relaxed mb-6">
            Chess is more than just a game—it is a competitive sport, an
            intellectual challenge, and even a professional career. To become a
            professional chess player, you must dedicate time to studying,
            practicing, competing, and continuously improving your skills.
            Here’s a step-by-step guide to building a successful career in
            chess.
          </p>

          <div className="space-y-8 mb-10">
            {/* Step 1 */}
            <div>
              <h3 className="text-2xl font-semibold text-[#362511] mb-2 flex items-center">
                <span className="mr-2">♟️</span> 1. Learn the Basics and Master
                the Rules
              </h3>
              <p className="text-[#362511]">
                Understanding the fundamental rules and strategies is crucial
                before pursuing chess professionally. Learn how each piece
                moves, special moves like castling and en passant, and the
                principles of opening, middle-game, and endgame play.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="text-2xl font-semibold text-[#362511] mb-2 flex items-center">
                <span className="mr-2">📖</span> 2. Improve Your Skills with
                Regular Practice
              </h3>
              <p className="text-[#362511]">
                Consistency is key to improvement. Regularly play against strong
                opponents, analyze your games, and solve tactical puzzles to
                sharpen your skills.
              </p>
              <ul className="list-disc list-inside text-[#362511] mt-2 space-y-1">
                <li>Play online and over-the-board chess regularly.</li>
                <li>Analyze your games to learn from mistakes.</li>
                <li>Study grandmaster games and their strategies.</li>
                <li>Practice chess puzzles to improve tactical awareness.</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="text-2xl font-semibold text-[#362511] mb-2 flex items-center">
                <span className="mr-2">📚</span> 3. Study Chess Openings, Middle
                Game, and Endgames
              </h3>
              <p className="text-[#362511]">
                To excel, you must understand chess at a deeper level. Focus on:
              </p>
              <ul className="list-disc list-inside text-[#362511] mt-2 space-y-1">
                <li>
                  <strong>Openings</strong>: Learn solid opening principles to
                  start strong.
                </li>
                <li>
                  <strong>Middle Game</strong>: Develop strong positional play
                  and tactics.
                </li>
                <li>
                  <strong>Endgames</strong>: Study common checkmating techniques
                  and pawn structures.
                </li>
              </ul>
            </div>

            {/* Step 4 */}
            <div>
              <h3 className="text-2xl font-semibold text-[#362511] mb-2 flex items-center">
                <span className="mr-2">🏆</span> 4. Participate in Chess
                Tournaments
              </h3>
              <p className="text-[#362511]">
                Competing in tournaments is crucial for improvement and earning
                recognition. Start with:
              </p>
              <ul className="list-disc list-inside text-[#362511] mt-2 space-y-1">
                <li>
                  <strong>Local and School Tournaments</strong> – Gain initial
                  experience.
                </li>
                <li>
                  <strong>National-Level Competitions</strong> – Improve your
                  ranking.
                </li>
                <li>
                  <strong>International Tournaments</strong> – Earn FIDE ratings
                  and titles.
                </li>
              </ul>
            </div>

            {/* Step 5 */}
            <div>
              <h3 className="text-2xl font-semibold text-[#362511] mb-2 flex items-center">
                <span className="mr-2">📊</span> 5. Earn Chess Ratings and
                Titles
              </h3>
              <p className="text-[#362511]">
                The World Chess Federation (FIDE) assigns chess ratings and
                titles based on performance:
              </p>
              <ul className="list-disc list-inside text-[#362511] mt-2 space-y-1">
                <li>
                  <strong>FIDE Ratings</strong>: Your rating reflects your chess
                  strength.
                </li>
                <li>
                  <strong>Titles</strong>: Earn titles like Candidate Master
                  (CM), FIDE Master (FM), International Master (IM), or the
                  prestigious Grandmaster (GM).
                </li>
              </ul>
            </div>

            {/* Step 6 */}
            <div>
              <h3 className="text-2xl font-semibold text-[#362511] mb-2 flex items-center">
                <span className="mr-2">🎓</span> 6. Train with Chess Coaches and
                Use Online Resources
              </h3>
              <p className="text-[#362511]">
                Professional coaching and online platforms can accelerate your
                progress. Consider:
              </p>
              <ul className="list-disc list-inside text-[#362511] mt-2 space-y-1">
                <li>Hiring a personal chess coach for structured training.</li>
                <li>Using platforms like Chess.com, Lichess, and Chessable.</li>
                <li>Watching grandmaster lessons and studying chess books.</li>
              </ul>
            </div>

            {/* Step 7 */}
            <div>
              <h3 className="text-2xl font-semibold text-[#362511] mb-2 flex items-center">
                <span className="mr-2">🧠</span> 7. Develop Mental and Physical
                Strength
              </h3>
              <p className="text-[#362511]">
                Chess requires immense focus and stamina. Improve your mental
                game by:
              </p>
              <ul className="list-disc list-inside text-[#362511] mt-2 space-y-1">
                <li>Practicing meditation and mindfulness.</li>
                <li>
                  Staying physically active for better endurance in long games.
                </li>
                <li>Managing stress and staying motivated.</li>
              </ul>
            </div>

            {/* Step 8 */}
            <div>
              <h3 className="text-2xl font-semibold text-[#362511] mb-2 flex items-center">
                <span className="mr-2">💼</span> 8. Explore Career Opportunities
                in Chess
              </h3>
              <p className="text-[#362511]">
                A career in chess is not limited to playing professionally.
                Other options include:
              </p>
              <ul className="list-disc list-inside text-[#362511] mt-2 space-y-1">
                <li>
                  <strong>Chess Coach</strong>: Teach beginners and aspiring
                  players.
                </li>
                <li>
                  <strong>Chess Streamer or Content Creator</strong>: Build an
                  audience online.
                </li>
                <li>
                  <strong>Chess Writer or Journalist</strong>: Write articles,
                  books, or reports on chess.
                </li>
                <li>
                  <strong>Chess Arbiter</strong>: Officiate in professional
                  tournaments.
                </li>
              </ul>
            </div>

            {/* Step 9 */}
            <div>
              <h3 className="text-2xl font-semibold text-[#362511] mb-2 flex items-center">
                <span className="mr-2">🚀</span> 9. Stay Committed and Keep
                Learning
              </h3>
              <p className="text-[#362511]">
                Chess is a lifelong learning process. Keep playing, stay updated
                with new strategies, and challenge yourself by competing at
                higher levels. With dedication, you can turn chess into a
                rewarding career.
              </p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-[#362511] mb-6 text-center">
            🏆 Best Resources to Learn Chess
          </h2>

          <div className="space-y-6">
            {/* Books */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center">
              <span className="text-2xl mr-3">📚</span>
              <div>
                <h3 className="text-xl font-semibold text-[#362511]">Books</h3>
                <p className="text-[#362511]">
                  <strong>"My System"</strong> – Aron Nimzowitsch
                  <br />
                  <strong>"Think Like a Grandmaster"</strong> – Alexander Kotov
                </p>
              </div>
            </div>

            {/* YouTube Channels */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center">
              <span className="text-2xl mr-3">🎥</span>
              <div>
                <h3 className="text-xl font-semibold text-[#362511]">
                  YouTube Channels
                </h3>
                <p className="text-[#362511]">
                  ChessBase India, Chess Talk, GothamChess
                </p>
              </div>
            </div>

            {/* Websites */}
            <div className="p-4 bg-gray-100 rounded-lg shadow-sm flex items-center">
              <span className="text-2xl mr-3">🌍</span>
              <div>
                <h3 className="text-xl font-semibold text-[#362511]">
                  Websites
                </h3>
                <p className="text-[#362511]">
                  <a
                    href="https://www.chess.com"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    chess.com
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://lichess.org"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    lichess.org
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <p className="mt-6 text-[#362511] font-semibold text-lg text-center">
            🎯 Chess is a game of strategy and skill. Start learning today and
            become a chess master!
          </p>

          {/* Chess Resources */}
        </div>
      </div>
    </div>
  );
};

export default ReadAndLearn;
