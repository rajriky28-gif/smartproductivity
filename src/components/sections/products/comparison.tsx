import { FadeIn } from "@/components/fade-in";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function ComparisonSection() {
  return (
    <section className="bg-muted py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-2xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="text-foreground font-semibold">
                  Stride
                </TableHead>
                <TableHead className="text-right text-muted-foreground">
                  Task planning, Focus sessions, Weekly awareness
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-transparent">
                <TableCell className="text-foreground font-semibold">
                  Future Tools
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  Designed with the same principles
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </FadeIn>
      </div>
    </section>
  );
}
