INSERT INTO users (name, password_digest) VALUES 
('connor', 'password'),
('frank', 'password');

INSERT INTO images (name, user_id, file_path, date_added, favourite) VALUES
('bitefish.gif', 1, '/Users/connormackay/practice/image-repo/public/', '1621356030051', false),
('compassprofile.jpg', 1, '/Users/connormackay/practice/image-repo/public/', '1621356035865', false),
('Webprepprofile.jpg', 1, '/Users/connormackay/practice/image-repo/public/', '1621356047701', true),
('babu!.jpg', 1, '/Users/connormackay/practice/image-repo/public/', '1621356047701', true),
('Resume.pdf', 2, '/Users/connormackay/practice/image-repo/public/', '1623858569734', false),
('Webprepprofile.jpg', 2, '/Users/connormackay/practice/image-repo/public/', '1623858651593', true);

