/* Book Page Specific Styles */

/* Book Hero Section */
.book - hero {
    background: linear - gradient(135deg, var(--dark - grey) 0 %, #3a4f56 100 %);
    padding: 120px 0 80px;
    min - height: 100vh;
    display: flex;
    align - items: center;
    position: relative;
    overflow: hidden;
}

.book - hero::before {
    content: '';
    position: absolute;
    top: -50 %;
    left: -50 %;
    width: 200 %;
    height: 200 %;
    background: radial - gradient(circle, #a855f7 0 %, transparent 70 %);
    opacity: 0.05;
    animation: float 30s infinite ease -in -out;
}

.book - hero - content {
    display: grid;
    grid - template - columns: 1fr 1fr;
    gap: 4rem;
    align - items: center;
    position: relative;
    z - index: 1;
}

/* Book Mockup */
.book - mockup {
    perspective: 1000px;
    animation: bookFloat 6s infinite ease -in -out;
}

@keyframes bookFloat {
    0 %, 100 % {
        transform: translateY(0) rotateY(- 10deg);
}
50 % {
    transform: translateY(-20px) rotateY(- 15deg);
    }
}

.book - cover {
    position: relative;
    width: 400px;
    height: 600px;
    transform - style: preserve - 3d;
    transform: rotateY(-20deg);
    transition: transform 0.3s;
}

.book - mockup: hover.book - cover {
    transform: rotateY(-10deg);
}

.book - spine {
    position: absolute;
    left: -30px;
    top: 0;
    width: 30px;
    height: 100 %;
    background: linear - gradient(to right, #1a1a1a 0 %, #2a2a2a 100 %);
    transform: rotateY(-90deg);
    transform - origin: right;
}

.book - front {
    width: 100 %;
    height: 100 %;
    background: var(--cream);
    box - shadow:
    0 0 50px rgba(0, 0, 0, 0.3),
        inset 0 0 30px rgba(0, 0, 0, 0.1);
    padding: 40px;
    display: flex;
    flex - direction: column;
    align - items: center;
    text - align: center;
}

.book - title {
    font - size: 3.5rem;
    color: #a855f7;
    font - family: Georgia, serif;
    margin - bottom: 0;
    letter - spacing: 2px;
}

.book - surname {
    font - size: 1.8rem;
    color: var(--dark - grey);
    letter - spacing: 8px;
    margin - bottom: 2rem;
    font - weight: 300;
}

.book - image - placeholder {
    width: 200px;
    height: 200px;
    margin: 2rem auto;
    overflow: hidden;
    border - radius: 10px;
    position: relative;
}

.book - image - placeholder img {
    width: 100 %;
    height: 100 %;
    object - fit: cover;
    filter: sepia(0.3) contrast(1.2);
}

.book - tagline {
    display: flex;
    flex - direction: column;
    gap: 0.5rem;
    margin: 2rem 0;
}

.book - tagline span {
    font - size: 1.2rem;
    font - weight: bold;
    letter - spacing: 4px;
    color: var(--dark - grey);
}

.book - author {
    font - size: 0.875rem;
    color: var(--text - light);
    margin - top: auto;
}

/* Book Info */
.book - info {
    color: var(--cream);
}

.coming - soon - badge {
    display: inline - block;
    background: linear - gradient(135deg, #a855f7 0 %, #8b5cf6 100 %);
    color: white;
    padding: 0.5rem 1.5rem;
    border - radius: 30px;
    font - size: 0.875rem;
    font - weight: bold;
    letter - spacing: 1px;
    margin - bottom: 2rem;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0 %, 100 % {
        transform: scale(1);
        opacity: 1;
    }
    50 % {
        transform: scale(1.05);
        opacity: 0.9;
    }
}

.book - info h1 {
    font - size: 3rem;
    margin - bottom: 0.5rem;
}

.book - info h2 {
    font - size: 1.5rem;
    color: var(--pastel - green);
    margin - bottom: 2rem;
    font - weight: 400;
}

.book - description {
    font - size: 1.125rem;
    line - height: 1.8;
    margin - bottom: 1.5rem;
    opacity: 0.95;
}

.book - author - info {
    font - size: 1rem;
    margin - bottom: 2rem;
    opacity: 0.9;
}

.book - author - info strong {
    color: var(--pastel - green);
}

.book - cta {
    display: flex;
    gap: 1rem;
    flex - wrap: wrap;
}

/* Book Highlights */
.book - highlights {
    background: white;
    padding: 80px 0;
}

.highlights - grid {
    display: grid;
    grid - template - columns: repeat(auto - fit, minmax(250px, 1fr));
    gap: 2rem;
    margin - top: 3rem;
}

.highlight - card {
    text - align: center;
    padding: 2rem;
    background: var(--cream);
    border - radius: 10px;
    transition: transform 0.3s, box - shadow 0.3s;
}

.highlight - card:hover {
    transform: translateY(-5px);
    box - shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.highlight - icon {
    font - size: 3rem;
    margin - bottom: 1rem;
}

.highlight - card h3 {
    color: var(--dark - grey);
    margin - bottom: 1rem;
}

.highlight - card p {
    color: var(--text - light);
    font - size: 0.95rem;
}

/* Preview Section */
.book - preview {
    background: var(--cream);
    padding: 80px 0;
}

.book - preview h2 {
    text - align: center;
    font - size: 2.5rem;
    color: var(--dark - grey);
    margin - bottom: 3rem;
}

.preview - content {
    max - width: 900px;
    margin: 0 auto;
}

.preview - page {
    background: white;
    padding: 3rem;
    border - radius: 10px;
    box - shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    margin - bottom: 3rem;
}

.preview - page blockquote {
    font - size: 1.125rem;
    line - height: 1.8;
    color: var(--text - light);
    font - style: italic;
    margin: 0;
}

.preview - page blockquote p {
    margin - bottom: 1rem;
}

.preview - caption {
    text - align: right;
    color: var(--dark - grey);
    font - weight: 600;
    margin - top: 2rem;
}

.preview - images {
    display: grid;
    grid - template - columns: 1fr 1fr;
    gap: 2rem;
}

.preview - image {
    text - align: center;
}

.preview - image img {
    width: 100 %;
    height: 300px;
    object - fit: cover;
    border - radius: 10px;
    box - shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    margin - bottom: 1rem;
}

.preview - image p {
    font - size: 0.875rem;
    color: var(--text - light);
    font - style: italic;
}

/* Progress Updates */
.book - updates {
    background: white;
    padding: 80px 0;
}

.book - updates h2 {
    text - align: center;
    font - size: 2.5rem;
    color: var(--dark - grey);
    margin - bottom: 3rem;
}

.updates - grid {
    display: grid;
    grid - template - columns: repeat(auto - fit, minmax(300px, 1fr));
    gap: 2rem;
    margin - bottom: 3rem;
}

.update - card {
    background: var(--cream);
    padding: 2rem;
    border - radius: 10px;
    border - top: 4px solid #a855f7;
}

.update - date {
    color: #a855f7;
    font - size: 0.875rem;
    font - weight: bold;
    margin - bottom: 1rem;
    text - transform: uppercase;
    letter - spacing: 1px;
}

.update - card h3 {
    color: var(--dark - grey);
    margin - bottom: 1rem;
}

.update - card p {
    color: var(--text - light);
    line - height: 1.6;
}

.updates - cta {
    text - align: center;
    font - size: 1.125rem;
    color: var(--dark - grey);
}

/* Email Signup Section */
.book - notify {
    background: linear - gradient(135deg, #a855f7 0 %, #8b5cf6 100 %);
    padding: 80px 0;
    position: relative;
    overflow: hidden;
}

.book - notify::before {
    content: '';
    position: absolute;
    top: -50 %;
    right: -50 %;
    width: 200 %;
    height: 200 %;
    background: radial - gradient(circle, rgba(255, 255, 255, 0.1) 0 %, transparent 70 %);
    animation: float 20s infinite ease -in -out reverse;
}

.notify - content {
    max - width: 600px;
    margin: 0 auto;
    text - align: center;
    color: white;
    position: relative;
    z - index: 1;
}

.notify - content h2 {
    font - size: 2.5rem;
    margin - bottom: 1rem;
}

.notify - content p {
    font - size: 1.125rem;
    margin - bottom: 2rem;
    opacity: 0.95;
}

.notify - form {
    margin - bottom: 2rem;
}

.form - group {
    display: flex;
    gap: 1rem;
    max - width: 500px;
    margin: 0 auto 1rem;
}

.form - group input[type = "email"] {
    flex: 1;
    padding: 1rem 1.5rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border - radius: 5px;
    font - size: 1rem;
    transition: all 0.3s;
}

.form - group input[type = "email"]::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

.form - group input[type = "email"]:focus {
    outline: none;
    border - color: white;
    background: rgba(255, 255, 255, 0.2);
}

.form - note {
    font - size: 0.875rem;
    opacity: 0.8;
}

.form - success {
    background: rgba(255, 255, 255, 0.2);
    padding: 1.5rem;
    border - radius: 10px;
    font - size: 1.125rem;
    animation: fadeIn 0.5s;
}

/* Interest Form */
.book - interest {
    background: var(--cream);
    padding: 80px 0;
}

.book - interest h2 {
    text - align: center;
    font - size: 2.5rem;
    color: var(--dark - grey);
    margin - bottom: 1rem;
}

.book - interest > .container > p {
    text - align: center;
    font - size: 1.125rem;
    color: var(--text - light);
    margin - bottom: 3rem;
}

.interest - form {
    max - width: 600px;
    margin: 0 auto;
    background: white;
    padding: 3rem;
    border - radius: 10px;
    box - shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.form - row {
    display: grid;
    grid - template - columns: 1fr 1fr;
    gap: 1.5rem;
    margin - bottom: 1.5rem;
}

.interest - form.form - group {
    margin - bottom: 1.5rem;
}

.interest - form label {
    display: block;
    color: var(--dark - grey);
    font - weight: 600;
    margin - bottom: 0.5rem;
}

.interest - form input[type = "text"],
.interest - form input[type = "email"],
.interest - form textarea {
    width: 100 %;
    padding: 0.75rem;
    border: 2px solid #e0e0e0;
    border - radius: 5px;
    font - size: 1rem;
    transition: border - color 0.3s;
}

.interest - form input: focus,
.interest - form textarea:focus {
    outline: none;
    border - color: #a855f7;
}

.checkbox - group {
    display: grid;
    grid - template - columns: 1fr 1fr;
    gap: 1rem;
    margin - top: 0.5rem;
}

.checkbox - label {
    display: flex;
    align - items: center;
    gap: 0.5rem;
    cursor: pointer;
    font - weight: 400;
    color: var(--text - light);
}

.checkbox - label input[type = "checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent - color: #a855f7;
}

.checkbox - label span {
    user - select: none;
}

.interest - form textarea {
    resize: vertical;
}

/* Active nav link */
.nav - links a.active {
    color: var(--pastel - green);
}

/* Responsive */
@media(max - width: 768px) {
    .book - hero - content {
        grid - template - columns: 1fr;
        text - align: center;
    }
    
    .book - mockup {
        margin: 0 auto 3rem;
        transform: scale(0.7);
    }
    
    .book - cover {
        transform: rotateY(0);
    }
    
    .book - mockup: hover.book - cover {
        transform: rotateY(0);
    }
    
    .preview - images {
        grid - template - columns: 1fr;
    }
    
    .form - row {
        grid - template - columns: 1fr;
    }
    
    .checkbox - group {
        grid - template - columns: 1fr;
    }
    
    .form - group {
        flex - direction: column;
    }
    
    .book - info h1 {
        font - size: 2rem;
    }
    
    .book - title {
        font - size: 2.5rem;
    }
    
    .interest - form {
        padding: 2rem;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}