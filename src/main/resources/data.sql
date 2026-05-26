INSERT INTO article(title, content) VALUES('당신의 인생 영화는?', '댓글 고');
INSERT INTO article(title, content) VALUES('당신의 소울 푸드는?', '댓글 고고');
INSERT INTO article(title, content) VALUES('당신의 취미는?', '댓글 고고고');

INSERT INTO comment(article_id, nickname, body) VALUES(1, 'PARK', '굿 윌 헌팅');
INSERT INTO comment(article_id, nickname, body) VALUES(1, 'KIM', '아이 엠 샘');
INSERT INTO comment(article_id, nickname, body) VALUES(1, 'CHOI', '쇼생크 탈출');

INSERT INTO comment(article_id, nickname, body) VALUES(2, 'PARK', '치킨');
INSERT INTO comment(article_id, nickname, body) VALUES(2, 'KIM', '샤브샤브');
INSERT INTO comment(article_id, nickname, body) VALUES(2, 'CHOI', '초밥');

INSERT INTO comment(article_id, nickname, body) VALUES(3, 'PARK', '조깅');
INSERT INTO comment(article_id, nickname, body) VALUES(3, 'KIM', '유튜브 시청');
INSERT INTO comment(article_id, nickname, body) VALUES(3, 'CHOI', '독서');