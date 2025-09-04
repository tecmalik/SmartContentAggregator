export class SummaryService {
    async generateSummary(content: string): Promise<string> {
        // Mock Hugging Face API call (replace with real API in production)
        return `Generated summary: ${content.slice(0, 100)}...`;
    }
}