const fs = require('fs');
let text = fs.readFileSync('mutual-funds.html', 'utf8');

text = text.replace(/const yahooApiUrl = `https:\/\/corsproxy\.io[^\n]+;/g, "const yahooApiUrl = `/api/quote?symbols=${symbols.join(',')}`;");

// also fix the else case for failure
text = text.replace(/if \(data && data\.quoteResponse && data\.quoteResponse\.result\) \{/, "if (data && data.quoteResponse && data.quoteResponse.result) {");

// Add a check for generic data errors
text = text.replace(/} catch \(error\) {/g, "} else { throw new Error('Proxy returned no data'); }\n    } catch (error) {");


fs.writeFileSync('mutual-funds.html', text);
